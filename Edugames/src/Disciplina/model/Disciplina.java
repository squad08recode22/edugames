package Disciplina.model;

public class Disciplina {
	private int id;
	private String nome_disciplina;

	public Disciplina() {
		super();
	}

	public Disciplina(int id, String nome_disciplina) {
		super();
		this.id = id;
		this.nome_disciplina = nome_disciplina;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_disciplina() {
		return nome_disciplina;
	}

	public void setNome_disciplina(String nome_disciplina) {
		this.nome_disciplina = nome_disciplina;
	}

}
