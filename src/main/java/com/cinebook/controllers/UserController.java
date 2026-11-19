package com.cinebook.controllers;

import com.cinebook.dtos.request.UserLoginRequest;
//this taken from ai
import com.cinebook.dtos.request.UserRegistrationRequest;
import jakarta.validation.Valid;
import com.cinebook.dtos.response.LoginSuccessResponse;
import com.cinebook.exceptions.BMSUnauthorizedException;
import com.cinebook.models.User;
import com.cinebook.services.AuthService;
import com.cinebook.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private UserService userService;
    private AuthService authService;

    @Autowired
    public UserController(UserService userService,
                          AuthService authService){
        this.userService = userService;
        this.authService = authService;
    }


    @PostMapping("/authenticate")
    public ResponseEntity authenticateUser(
            @RequestBody UserLoginRequest userLoginRequest
            ){
        User user = userService.authenticateUser(userLoginRequest);
        LoginSuccessResponse loginSuccessResponse = authService.generateLoginSuccessToken(user);
        return new ResponseEntity(loginSuccessResponse, HttpStatus.OK);
    }

    //this taken from ai
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegistrationRequest request) {
        try {
            User registeredUser = userService.registerUser(request);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully!");
            response.put("email", registeredUser.getEmail());
            response.put("fullName", registeredUser.getFullName());
            response.put("userId", registeredUser.getSysId());
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(Map.of("error", e.getMessage()), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("error", "Registration failed. Try again."), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
