package de.neuefische.backend.service;

import de.neuefische.backend.model.CreateUser;
import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Service
public class AppUserService {

    private AppUserRepo appUserRepo;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AppUserService(AppUserRepo appUserRepo, PasswordEncoder passwordEncoder) {
        this.appUserRepo = appUserRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public String register(CreateUser createUser) {

        String hashedPassword = passwordEncoder.encode(createUser.getPassword());

        AppUser appUser = new AppUser();
        appUser.setUsername(createUser.getUsername());
        appUser.setPasswordHash(hashedPassword);
        appUser.setRoles(List.of("USER"));

        return appUserRepo.save(appUser).getUsername();
    }
}