package main.java.libraries;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity(name = "main.java.libraries.Category")
@Table(name = "CATEGORIES")
public class Category implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "CATEGORY_ID")
	private Integer categoryId;

	@Column(name = "NAME")
	private String name;

	@Column(name = "STATE")
	private Integer state;
}
