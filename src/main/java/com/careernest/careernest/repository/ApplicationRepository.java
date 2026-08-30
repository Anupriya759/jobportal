package com.careernest.careernest.repository;

import com.careernest.careernest.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}