package com.reformasyacabados.ryaweb.models;

import jakarta.persistence.*;
import lombok.Data;



@Data

@Entity
@Table(name = "Clientes")
public class Cliente {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

    int id_cliente;


    String nombre_cliente;

    String documento;

    String telefono;

    String direccion;

    int estado;


}
