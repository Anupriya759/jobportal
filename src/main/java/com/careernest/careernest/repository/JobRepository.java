package com.careernest.careernest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.careernest.careernest.Job;

public interface JobRepository extends JpaRepository<Job, Long> {
}