package com.MentalHelper.MentalHelp.Mood.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MoodService {

    @Autowired
    private MoodRepository moodRepository;

    public Mood saveMood(String userId, String mood) {
        Mood moodLog = new Mood();
        moodLog.setUserId(userId);
        moodLog.setMood(mood);
        moodLog.setTimestamp(LocalDateTime.now());
        return moodRepository.save(moodLog);
    }

    public List<Mood> getMoodHistory(String userId) {
        return moodRepository.findByUserId(userId);
    }
}
