package main.java.users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;

@Path("/users")
public class UserResource {

	@Context
	private HttpServletRequest request;

	private static final String USER_DATA = "data";

	@GET
	@Path("/sayHello")
	@Produces("application/json")
	public String sayHello() {

		return "Hello, I am Giga";
	}

	@GET
	@Path("/getUser")
	@Produces("application/json")
	public User getUser() {

		return new UserBean().getUser();
	}

	@GET
	@Path("/auth")
	@Produces("application/json")
	public User auth(@QueryParam("username") String username,
			@QueryParam("password") String password) {

		User user = new UserBean().auth(username, password);

		HttpSession session = request.getSession();
		session.setAttribute(USER_DATA, user);

		return user;
	}

}
