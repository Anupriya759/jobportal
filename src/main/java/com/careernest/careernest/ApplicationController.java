package com.careernest.careernest;

import com.careernest.careernest.repository.ApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @PostMapping
    public Application applyForJob(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
}