<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Concurso Agrinho</title>
    <style>
        /* Configurações Globais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #f9fbf9;
            color: #333;
        }

        /* Cabeçalho e Navegação */
        header {
            background-color: #27ae60;
            color: white;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo h1 {
            font-size: 1.8rem;
            color: #f1c40f;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #f1c40f;
        }

        /* Seção Destaque (Hero) */
        .hero {
            background: linear-gradient(rgba(39, 174, 96, 0.8), rgba(39, 174, 96, 0.6)), 
                        url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200') no-repeat center center/cover;
            color: white;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 20px;
        }

        .hero h2 {
            font-size: 3rem;
            margin-bottom: 15px;
            text-shadow: 2px
