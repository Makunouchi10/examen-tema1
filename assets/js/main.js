/**
 * =====================================================
 *  Proyecto Canvas 2D – Versión Mejorada y Más Fiel
 *  Recreación geométrica casi idéntica a la imagen dada
 *  Incluye carretera del fondo
 *  Programador: [Tu Nombre]
 * =====================================================
 */

window.onload = function () {

    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    /** Utilidad: contorno grueso estilo cartoon */
    function outline() {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000";
        ctx.stroke();
    }

    /* =====================================================
        CIELO EN FRANJAS (colores exactos del original)
    ===================================================== */
    const sky = ["#FFDC73", "#FFCB52", "#FFB03A", "#FF9A24", "#FF8614"];
    sky.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.fillRect(0, i * 80, 500, 80);
    });

    /* =====================================================
        SOL
    ===================================================== */
    ctx.beginPath();
    ctx.arc(250, 190, 65, 0, Math.PI * 2);
    ctx.fillStyle = "#FF7F00";
    ctx.fill();
    outline();

    /* =====================================================
        ESTRELLAS DECORATIVAS
    ===================================================== */
    function star(x, y) {
        ctx.beginPath();
        ctx.moveTo(x - 8, y);
        ctx.lineTo(x + 8, y);
        ctx.moveTo(x, y - 8);
        ctx.lineTo(x, y + 8);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    star(130, 110);
    star(200, 130);
    star(330, 115);
    star(400, 150);

    /* =====================================================
        MONTAÑAS (más similares a la imagen real)
    ===================================================== */
    function mountain(points, color) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        outline();
    }

    // Montaña izquierda
    mountain(
        [
            { x: 0, y: 300 },
            { x: 120, y: 230 },
            { x: 250, y: 300 },
            { x: 0, y: 300 }
        ],
        "#4A2E73"
    );

    // Montaña derecha
    mountain(
        [
            { x: 180, y: 300 },
            { x: 300, y: 220 },
            { x: 500, y: 300 },
            { x: 180, y: 300 }
        ],
        "#3B1C60"
    );

    /* =====================================================
        CARRETERA TRASERA (la que aparece detrás del auto)
    ===================================================== */
    ctx.beginPath();
    ctx.moveTo(500, 300);
    ctx.quadraticCurveTo(420, 330, 350, 310);
    ctx.quadraticCurveTo(300, 290, 200, 310);
    ctx.quadraticCurveTo(100, 330, 0, 300);
    ctx.lineTo(0, 330);
    ctx.lineTo(500, 330);
    ctx.closePath();
    ctx.fillStyle = "#4D4D4D";
    ctx.fill();
    outline();

  /* =====================================================
        PALMERAS MEJORADAS (Estilo Flat Art)
    ===================================================== */
    function palm(x, y, scale = 1) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Tronco (Ligeramente más delgado y con color madera suave)
        ctx.fillStyle = "#A1662F";
        ctx.beginPath();
        ctx.rect(-5, 0, 10, 40);
        ctx.fill();
        outline();

        // Hojas (3 Círculos/Óvalos verdes superpuestos)
        ctx.fillStyle = "#2ECC71";
        
        // Hoja izquierda
        ctx.beginPath();
        ctx.ellipse(-15, -5, 18, 12, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        outline();

        // Hoja derecha
        ctx.beginPath();
        ctx.ellipse(15, -5, 18, 12, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        outline();

        // Hoja central (arriba)
        ctx.beginPath();
        ctx.ellipse(0, -15, 18, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        outline();

        ctx.restore();
    }

    // Posicionamiento similar a la imagen (atrás a la derecha)
    palm(320, 260, 0.7); // Palmera pequeña al fondo
    palm(360, 265, 0.75); // Palmera mediana
    palm(430, 290, 1.2);  // Palmera grande más cerca
    /* =====================================================
        MAR (exacto a la imagen)
    ===================================================== */
    ctx.fillStyle = "#3DA7E0";
    ctx.fillRect(0, 330, 500, 90);
    outline();

    // Burbujas
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.arc(40 + i * 40, 360 + Math.random() * 20, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        outline();
    }

    /* =====================================================
        CARRETERA PRINCIPAL (la del frente)
    ===================================================== */
    ctx.fillStyle = "#3E3E3E";
    ctx.fillRect(0, 420, 500, 100);
    outline();

    ctx.setLineDash([35, 20]);
    ctx.strokeStyle = "#D6D6D6";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 470);
    ctx.lineTo(500, 470);
    ctx.stroke();
    ctx.setLineDash([]);

   /* =====================================================
        AUTO — Versión Proporcional y Fiel al Original
       ===================================================== */
    const carX = 180; // Posición base X
    const carY = 415; // Posición base Y (ajustada a la carretera)

    // 1. Sombra del auto (opcional para realismo, pero la imagen es flat)
    
    // 2. Carrocería Principal (Color Rojo)
    ctx.beginPath();
    ctx.moveTo(carX - 90, carY + 10);  // Punta delantera inferior
    ctx.lineTo(carX - 100, carY - 5);  // Punta delantera media
    ctx.lineTo(carX - 50, carY - 25);  // Cofre (ángulo pronunciado)
    ctx.lineTo(carX + 10, carY - 55);  // Parabrisas inicio
    ctx.lineTo(carX + 130, carY - 55); // Techo plano
    ctx.lineTo(carX + 190, carY - 20); // Caída trasera (pilar C)
    ctx.lineTo(carX + 215, carY - 25); // Alerón punta superior
    ctx.lineTo(carX + 215, carY + 15); // Trasera vertical
    ctx.lineTo(carX - 90, carY + 15);  // Base
    ctx.closePath();
    ctx.fillStyle = "#E62828";
    ctx.fill();
    outline();

    // 3. Ventanilla (Negro/Gris Oscuro)
    ctx.beginPath();
    ctx.moveTo(carX + 5, carY - 50);   // Inicio parabrisas
    ctx.lineTo(carX + 120, carY - 50); // Techo
    ctx.lineTo(carX + 140, carY - 30); // Ángulo trasero ventanilla
    ctx.lineTo(carX + 10, carY - 30);  // Base ventanilla
    ctx.closePath();
    ctx.fillStyle = "#1A1A1A";
    ctx.fill();
    outline();

    // 4. Detalle de Toma de Aire Lateral (El triángulo negro en la puerta)
    ctx.beginPath();
    ctx.moveTo(carX + 130, carY - 25);
    ctx.lineTo(carX + 180, carY - 20);
    ctx.lineTo(carX + 150, carY + 5);
    ctx.closePath();
    ctx.fillStyle = "#951919"; // Rojo más oscuro para profundidad
    ctx.fill();
    outline();

    // 5. Faros delanteros (Triangulares amarillos/blancos)
    ctx.beginPath();
    ctx.moveTo(carX - 95, carY - 2);
    ctx.lineTo(carX - 60, carY - 15);
    ctx.lineTo(carX - 55, carY - 5);
    ctx.closePath();
    ctx.fillStyle = "#FEFFD2";
    ctx.fill();
    outline();

    // 6. Espejo Retrovisor
    ctx.beginPath();
    ctx.moveTo(carX + 15, carY - 35);
    ctx.lineTo(carX + 40, carY - 35);
    ctx.lineTo(carX + 35, carY - 28);
    ctx.lineTo(carX + 15, carY - 28);
    ctx.closePath();
    ctx.fillStyle = "#E62828";
    ctx.fill();
    outline();

    // 7. Llantas (Estilo Original: Círculo negro con centro blanco)
    function drawOriginalWheel(x, y) {
        // Neumático
        ctx.beginPath();
        ctx.arc(x, y, 32, 0, Math.PI * 2);
        ctx.fillStyle = "#222";
        ctx.fill();
        outline();

        // Rin (Centro blanco circular)
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
        outline();
    }

    drawOriginalWheel(carX - 25, carY + 15); // Rueda delantera
    drawOriginalWheel(carX + 145, carY + 15); // Rueda trasera
    /* =====================================================
        ARBUSTOS DEL FRENTE
    ===================================================== */
    function bush(x, y) {
        ctx.fillStyle = "#2ECC71";
        ctx.beginPath();
        ctx.arc(x, y, 35, Math.PI, Math.PI * 2);
        ctx.arc(x + 35, y, 35, Math.PI, Math.PI * 2);
        ctx.arc(x + 70, y, 35, Math.PI, Math.PI * 2);
        ctx.fill();
        outline();
    }

    bush(20, 520);
    bush(140, 520);
    bush(260, 520);

};