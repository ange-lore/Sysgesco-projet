package com.sygesco.sygesco.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {
  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private Long id ;
  private String noms ;
  private String pronoms;
  private String email;
  private String dateDeNaissance;
  private String lieuDeNaissance;
  private String adressePermanente;
  private String nationalite;
  private String sitautionMatimonial;
  private String image;
  private String regionDorigine ;
  private String niveau;
  private String filiere;
  private Long numCNI;
  private String statusEdudiant;
}
