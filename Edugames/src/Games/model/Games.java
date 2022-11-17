package Games.model;

public class Games {
	private int id;
	private String nome_games;

	public Games() {
		super();
	}

	public Games(int id, String nome_games) {
		super();
		this.id = id;
		this.nome_games = nome_games;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_games() {
		return nome_games;
	}

	public void setNome_games(String nome_games) {
		this.nome_games = nome_games;
	}

}
