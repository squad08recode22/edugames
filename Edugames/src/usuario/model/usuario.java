package usuario.model;

public class usuario {
private int id;
private String Nome_usuario;
public usuario() {
	super();
}
public usuario(int id, String nome_usuario) {
	super();
	this.id = id;
	Nome_usuario = nome_usuario;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getNome_usuario() {
	return Nome_usuario;
}
public void setNome_usuario(String nome_usuario) {
	Nome_usuario = nome_usuario;
}

}
