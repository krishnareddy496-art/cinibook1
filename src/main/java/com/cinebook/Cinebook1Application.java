package com.cinebook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class Cinebook1Application {

	public static void main(String[] args) {
		SpringApplication.run(Cinebook1Application.class, args);
	}

}
