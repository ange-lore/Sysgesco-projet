package com.sygesco.sygesco.service;

import com.sygesco.sygesco.domain.Candidate;
import com.sygesco.sygesco.repo.CandidateRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CandidateServiceImpl implements CandidateService {
  private final CandidateRepo candidateRepo;

  @Override
  public Candidate saveCandidate(Candidate candidate) {
    log.info("Saving new candidate {} tp the database " + candidate.getEmail());
    return candidateRepo.save(candidate);
  }


  @Override
  public List<Candidate> getCandidates() {
    log.info("Fetching All Users {}");
    return candidateRepo.findAll();
  }

}
