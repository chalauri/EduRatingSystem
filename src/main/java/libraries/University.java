package main.java.libraries;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "main.java.libraries.University")
@Table(name = "UNIVERSITIES")
public class University implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="UNIVERSITY_ID")
	private Integer universityId;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="STATE")
	private Integer state;

	public Integer getUniversityId() {
		return universityId;
	}

	public void setUniversityId(Integer universityId) {
		this.universityId = universityId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}
	
	
}
