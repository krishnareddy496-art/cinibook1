package com.cinebook.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "seat-mappings")
public class SeatMapping extends GlobalRecord {
    @Column(name = "`row`")
    private String row;
    @ManyToOne
    private Hall hall;
    private String seatRange;
    private String seatBreak;
}
