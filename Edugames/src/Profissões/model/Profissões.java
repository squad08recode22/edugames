package Profissões.model;

public class Profissões {
	private int id;
	private String nome_profissão;

	public Profissões() {
		super();
	}

	public Profissões(int id, String nome_profissão) {
		super();
		this.id = id;
		this.nome_profissão = nome_profissão;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_profissão() {
		return nome_profissão;
	}

	public void setNome_profissão(String nome_profissão) {
		this.nome_profissão = nome_profissão;
	}

}
