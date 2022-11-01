package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.AppUserRepo;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class AppUserDetailService implements UserDetailsService {

    private final AppUserRepo userRepo;

    public AppUserDetailService(AppUserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = userRepo.findById(username)
                .orElse(null);
        if (appUser == null) {
            return null;
        }
        return new User(appUser.getUsername(), appUser.getPasswordHash(), Collections.emptyList());
    }
}
