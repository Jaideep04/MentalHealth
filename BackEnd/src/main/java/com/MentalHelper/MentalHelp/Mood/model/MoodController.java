package com.MentalHelper.MentalHelp.Mood.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mood")
@CrossOrigin(origins = "http://localhost:5173")
public class MoodController {

    @Autowired
    private MoodService moodService;

    @PostMapping("/log")
    public Mood logMood(@RequestBody Mood mood) {
        return moodService.saveMood(mood.getUserId(), mood.getMood());
    }

    @GetMapping("/history/{userId}")
    public List<Mood> getMoodHistory(@PathVariable String userId) {
        return moodService.getMoodHistory(userId);
    }
}
