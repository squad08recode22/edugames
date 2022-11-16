package Aluno.model;

public class Aluno {
	private int id;
	private String nome_aluno;

	public Aluno() {
		super();
	}

	public Aluno(int id, String nome_aluno) {
		super();
		this.id = id;
		this.nome_aluno = nome_aluno;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_aluno() {
		return nome_aluno;
	}

	public void setNome_aluno(String nome_aluno) {
		this.nome_aluno = nome_aluno;
	}
	

}


