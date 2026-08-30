package com.careernest.careernest;

import org.springframework.web.bind.annotation.*;
import com.careernest.careernest.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {

        return userRepository
                .findFirstByEmailAndPassword(
                        user.getEmail(),
                        user.getPassword()
                )
                .isPresent()
                ? "Login successful"
                : "Invalid email or password";
    }
}