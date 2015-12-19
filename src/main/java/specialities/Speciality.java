package main.java.specialities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "main.java.specialities.Speciality")
@Table(name = "SPECIALITIES")
public class Speciality implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "SPECIALITY_ID")
	private Integer specialityId;


	@Column(name = "UNIVERSITY_ID")
	private Integer universityId;

	@Column(name = "NAME")
	private String name;

	@Column(name = "STATE")
	private Integer state;

	public Integer getSpecialityId() {
		return specialityId;
	}

	public void setSpecialityId(Integer specialityId) {
		this.specialityId = specialityId;
	}

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
