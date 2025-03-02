uniform float uTime;
uniform float uRotationDY;
uniform float uRotationDX;

void main() {
    // Compute rotation around the Y-axis
    float cosDY = cos(uRotationDY * uTime);
    float sinDY = sin(uRotationDY * uTime);
    mat4 rotationY = mat4(
        cosDY,  0.0, sinDY, 0.0,
        0.0,    1.0, 0.0,   0.0,
       -sinDY,  0.0, cosDY, 0.0,
        0.0,    0.0, 0.0,   1.0
    );

    // Compute rotation around the X-axis
    float cosDX = cos(uRotationDX * uTime);
    float sinDX = sin(uRotationDX * uTime);
    mat4 rotationX = mat4(
        1.0, 0.0,   0.0,    0.0,
        0.0, cosDX, -sinDX, 0.0,
        0.0, sinDX,  cosDX, 0.0,
        0.0, 0.0,   0.0,    1.0
    );

    // Apply rotations in local space: rotate the original vertex position
    vec4 rotatedPosition = rotationY * rotationX * vec4(position, 1.0);

    // Transform the rotated position with the modelViewMatrix and then the projectionMatrix
    vec4 modelPosition = modelViewMatrix * rotatedPosition;
    gl_Position = projectionMatrix * modelPosition;
}
