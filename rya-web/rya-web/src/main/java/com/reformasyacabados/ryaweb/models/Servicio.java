package com.reformasyacabados.ryaweb.models;

import jakarta.persistence.*;
import lombok.Data;


@Data

@Entity
@Table(name = "Servicios")
public class Servicio {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

    int id_servicio;


    String nombre_servicio;

    String categoria;

    double valor_unitario;

    int estado;


}
