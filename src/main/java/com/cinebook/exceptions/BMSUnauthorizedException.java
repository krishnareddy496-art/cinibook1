package com.cinebook.exceptions;

public class BMSUnauthorizedException extends RuntimeException{
    public BMSUnauthorizedException(String message){
        super(message);
    }
}
