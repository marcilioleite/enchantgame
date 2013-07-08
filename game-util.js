var RIGHT_DIRECTION = 0,
	LEFT_DIRECTION = 1,
	UP_DIRECTION = 2,
	DOWN_DIRECTION = 3; 

function angular(pointA, pointB) {
	var sx = pointA.x - pointB.x, sy = pointA.y - pointB.y
	return Math.atan2(sx, sy) * (180 / Math.PI)  
}

function direcionar(angle) {
	var direction = RIGHT_DIRECTION
	
	if (angle > 150 && angle <= 180 || angle >= -180 && angle < -150) {
		direction = DOWN_DIRECTION
	} else if (angle > 0 && angle <= 30 || angle >= -30 && angle < 0 ) {
		direction = UP_DIRECTION
	} else if (angle > 30 && angle <= 180) {
		direction = LEFT_DIRECTION
	}
	return direction
}
