package de.neuefische.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class MITIController {

    @GetMapping
    public String sayHello(){
        return "Hello from the other Side";
    }
}
