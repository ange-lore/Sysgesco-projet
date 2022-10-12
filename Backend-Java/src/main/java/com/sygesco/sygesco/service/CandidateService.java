package com.sygesco.sygesco.service;
import com.sygesco.sygesco.domain.Candidate;
import java.util.List;

public interface CandidateService {

  Candidate saveCandidate(Candidate candidate);

//  Candidate getCandidate(String candidateName);

  List<Candidate> getCandidates();

}
