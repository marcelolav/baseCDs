export const querys = {
    getAllDiscos: "SELECT TOP(500) * FROM [discos].[dbo].[ListadoDVD]",
    getDiscoById: "SELECT * FROM ListadoDVD Where Id = @Id",
    getDiscoByDVD: "SELECT TOP(500) * FROM ListadoDVD Where DVD = @dvd",
    addNewDisco:  "INSERT INTO [discos].[dbo].[ListadoDVD] (DVD, nombreCD, nombreCancion, estilo) VALUES (@DVD,@nombreCD,@nombreCancion, @estilo);",
    deleteDiscoByID: "DELETE FROM [discos].[dbo].[ListadoDVD] WHERE id= @id",
    getTotalCanciones: "SELECT COUNT(*) FROM discos.dbo.ListadoDVD",
    updateDiscoById: "UPDATE [discos].[dbo].[ListadoDVD] SET DVD = @DVD, nombreCD = @nombreCD, nombreCancion = @nombreCancion, estilo = @estilo WHERE id = @id",
};
