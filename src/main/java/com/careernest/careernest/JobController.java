package com.careernest.careernest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.careernest.careernest.repository.JobRepository;

@RestController
public class JobController {

    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping("/api/jobs")
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @PostMapping("/api/jobs")
    public Job addJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @DeleteMapping("/api/jobs/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobRepository.deleteById(id);
    }
}