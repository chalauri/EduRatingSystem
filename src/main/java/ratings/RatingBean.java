package main.java.ratings;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import main.java.CategoryRatingReport;
import main.java.SpecRatingReport;
import main.java.State;
import main.java.UniRatingReport;
import main.java.libraries.Category;
import main.java.libraries.University;
import main.java.specialities.Speciality;

public class RatingBean {

	EntityManagerFactory emf = Persistence
			.createEntityManagerFactory("eduratingsystem");

	public List<UniRatingReport> rating() {

		EntityManager em = emf.createEntityManager();
		List<Rating> ratings = em.createQuery("from main.java.ratings.Rating",
				Rating.class).getResultList();

		List<University> universities = em
				.createQuery(
						"from main.java.libraries.University e where e.state =:state",
						University.class).setParameter("state", State.ACTIVE)
				.getResultList();

		List<Category> categories = em
				.createQuery(
						"from main.java.libraries.Category e where e.state =:state",
						Category.class).setParameter("state", State.ACTIVE)
				.getResultList();

		List<Speciality> specialities = em
				.createQuery(
						"from main.java.specialities.Speciality e where e.state =:state",
						Speciality.class).setParameter("state", State.ACTIVE)
				.getResultList();

		List<UniRatingReport> result = new ArrayList<>();
		for (University university : universities) {

			UniRatingReport urr = new UniRatingReport();

			int uniCount = 0;
			double uniRat = 0;
			List<SpecRatingReport> srrList = new ArrayList<>();
			for (Speciality speciality : specialities) {
				SpecRatingReport srr = new SpecRatingReport();
				List<CategoryRatingReport> crrList = new ArrayList<>();
				if (speciality.getUniversityId().equals(
						university.getUniversityId())) {

					int count = 0;
					double specRating = 0;
					boolean has = false;
					for (Category category : categories) {
						CategoryRatingReport crr = new CategoryRatingReport();
						double maxGrade = 0;
						double grade = 0;
						boolean hasSpec = false;
						for (Rating rating : ratings) {

							if (rating.getCategory().getCategoryId()
									.equals(category.getCategoryId())
									&& rating
											.getSpeciality()
											.getSpecialityId()
											.equals(speciality
													.getSpecialityId())
									&& rating
											.getUniversity()
											.getUniversityId()
											.equals(university
													.getUniversityId())) {
								maxGrade += rating.getUser().getCoeficient() * 10;
								grade += rating.getGrade()
										* rating.getUser().getCoeficient();
								has = true;
								hasSpec = true;
							}
						}
						crr.setCategory(category);
						double rat = ((grade / maxGrade) * 100);
						crr.setRating(rat);
						crrList.add(crr);

						if (hasSpec) {
							count++;
							specRating += rat;
						}
						if (hasSpec) {
							uniCount++;
							uniRat += rat;
						}
					}

					srr.setCategoryRatingReports(crrList);
					srr.setRating(specRating / count);
					srr.setSpeciality(speciality);
					srrList.add(srr);
				}
			}

			urr.setSpecRatingReports(srrList);
			urr.setUniversity(university);
			urr.setRating(uniRat / uniCount);
			result.add(urr);
		}

		return result;
	}
}
