package Aluno.DAO;

public class AlunosDAO {

	connection.conn();
	PreparedStatement pstm = null;

	// Metodo pra salvar
	public void save(Aluno aluno) {
		String sql = "INSERT INTO Aluno (nome_aluno) values();";

		try {
			
			conn = ConnectionMySQL.createConnectionMySQL();
		
		
			pstm = conn.prepareStatement(sql);

		
			pstm.setString(1, aluno.getNome());

			
			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}

	public List<Aluno> getAlunosDAO() {
		String sql = "select * from Aluno;";

		List<Aluno> autores = new ArrayList<Aluno>();

		ResultSet rset = null;

		try {
			conn = ConnectionMySQL.createConnectionMySQL();

			pstm = conn.prepareStatement(sql);

			rset = pstm.executeQuery();

			while (rset.next()) {
				Aluno autor = new Aluno();

				autor.setId(rset.getInt("id_aluno"));

				autor.setNome(rset.getString("nome_aluno"));

				autores.add(aluno);

			}

		} catch (Exception e) {
			e.printStackTrace();

		} finally {
			try {
				if (rset != null) {
					rset.close();
				}
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return aluno;
	}
	

	public void update(Aluno aluno); {
		String sql = "UPDATE aluno set nome_aluno =  where id_aluno";

		try {
			conn = ConnectionMySQL.createConnectionMySQL();

			pstm = conn.prepareStatement(sql);

			pstm.setString(1, autor.getNome());

			pstm.setInt(2, autor.getId());

			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	
	public void deleteById(int id) {
		String sql = "DELETE FROM aluno WHERE id_aluno";

		try {
			conn = ConnectionMySQL.createConnectionMySQL();

			pstm = conn.prepareStatement(sql);

			pstm.setInt(1, id);

			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public Autores getAutorById(int id) {
		String sql = "SELECT * FROM aluno WHERE id_aluno";

		Aluno aluno = new Aluno();

		ResultSet rset = null;

		try {
			conn = ConnectionMySQL.createConnectionMySQL();

			pstm = conn.prepareStatement(sql);

			pstm.setInt(1, id);

			rset = pstm.executeQuery();

			rset.next();

			aluno.setId(rset.getInt("id_aluno"));

			aluno.setNome(rset.getString("nome_aluno"));

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}
				if conn != null(), {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return aluno;
	}


}
