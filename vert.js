function vert(x, y, d, t) {
	this.pos_x = x;
	this.pos_y = y;
	
	this.vel_x = cos(d) * 2.0;
	this.vel_y = sin(d) * 2.0;
	
	this.t = t;

	this.update = function() {
		this.pos_x += this.vel_x;
		this.pos_y += this.vel_y;
		
		border = 0;
		if (this.pos_x < -windowWidth * 0.5 - border) { this.vel_x *= -1; this.pos_x = -windowWidth * 0.5 - border; }
		if (this.pos_y < -windowHeight * 0.5 - border) { this.vel_y *= -1; this.pos_y = -windowHeight * 0.5 - border; }
		if (this.pos_x >  windowWidth * 0.5 + border) { this.vel_x *= -1; this.pos_x = windowWidth * 0.5 + border; }
		if (this.pos_y >  windowHeight * 0.5 + border) { this.vel_y *= -1; this.pos_y = windowHeight * 0.5 + border; }
		
		this.t += 0.01;
	}

	this.render = function(vertices, vert_count) {
		for (var i = 0; i < vert_count; i++) {
			if (this == vertices[i]) continue;

			console.log(sin(this.t));
			console.log(sin(vertices[i].t));
			
			beginShape(LINES);
			stroke(255, 0, sin(this.t));
			vertex(this.pos_x, this.pos_y);
			stroke(255, 0, sin(vertices[i].t));
			vertex(vertices[i].pos_x, vertices[i].pos_y);
			endShape();
		}
	}
}