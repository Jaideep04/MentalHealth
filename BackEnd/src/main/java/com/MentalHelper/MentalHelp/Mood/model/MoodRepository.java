package com.MentalHelper.MentalHelp.Mood.model;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MoodRepository extends JpaRepository<Mood, Long> {
    List<Mood> findByUserId(String userId);
}
