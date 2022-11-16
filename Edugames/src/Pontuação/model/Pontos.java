package Pontuação.model;

public class Pontos {
	private int id;
	private String pontos;

	public Pontos() {
		super();
	}

	public Pontos(int id, String pontos) {
		super();
		this.id = id;
		this.pontos = pontos;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPontos() {
		return pontos;
	}

	public void setPontos(String pontos) {
		this.pontos = pontos;
	}

}
