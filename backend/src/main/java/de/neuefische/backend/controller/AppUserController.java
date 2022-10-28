package de.neuefische.backend.controller;

import de.neuefische.backend.model.CreateUser;
import de.neuefische.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api/user")
public class AppUserController {

    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/login")
    public String login(){

        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){

        session.invalidate();
    }

    @PostMapping("/register")
    public String register(@RequestBody CreateUser createUser){

        String username = appUserService.register(createUser);

        return username;
    }
}