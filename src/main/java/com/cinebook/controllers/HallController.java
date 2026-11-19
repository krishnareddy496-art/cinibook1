package com.cinebook.controllers;

import com.cinebook.dtos.request.CreateHallRequest;
import com.cinebook.enums.OperationType;
import com.cinebook.models.Employee;
import com.cinebook.models.Hall;
import com.cinebook.services.AuthService;
import com.cinebook.services.HallService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/hall")
public class HallController {

    private AuthService authService;
    private HallService hallService;

    @Autowired
    public HallController(AuthService authService,
                          HallService hallService){
        this.authService = authService;
        this.hallService = hallService;
    }

    @PostMapping("/register")
    public ResponseEntity registerHall(@RequestBody CreateHallRequest createHallRequest,
                                       @RequestHeader String bmsToken){
       Employee employee =  authService.isEmployeeHavingAccess(bmsToken, OperationType.CREATE_HALL.name());
       Hall hall = hallService.registerHall(createHallRequest, employee);
       return new ResponseEntity(hall, HttpStatus.CREATED);
    }

}
