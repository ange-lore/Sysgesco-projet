package com.sygesco.sygesco.api;

import com.sygesco.sygesco.domain.Candidate;
import com.sygesco.sygesco.service.CandidateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CandidateResource {
  private final CandidateService candidateService;

  @GetMapping("/allCandidates")
  public ResponseEntity<List<Candidate>> getCandidates() {
    return ResponseEntity.ok().body(candidateService.getCandidates());
  }
  @PostMapping("/saveCandidate")
  public ResponseEntity<Candidate>saveCandidate(@RequestBody Candidate candidate) {
    URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("candidate/saveCandidate").toUriString());
    return ResponseEntity.created(uri).body(candidateService.saveCandidate(candidate));
  }
}
