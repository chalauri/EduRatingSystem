package main.java;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/users")
public class UserResource {

	@GET
	@Path("/sayHello")
	@Produces("application/json")
	public String sayHello(){
		
		return "Hello, I am Giga";
	}
	
	@GET
	@Path("/getUser")
	@Produces("application/json")
	public User getUser(){
		
		return new UserBean().getUser();
	}


}

