package main.java.questions;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/questions")
public class QuestionResource {

	@GET
	@Path("/list")
	@Produces("application/json; charset=UTF-8")
	public List<Question> getQuestions() {

		List<Question> res = new QuestionBean().getQuestions();

		return res;
	}
}
