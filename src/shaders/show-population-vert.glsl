#version 300 es

uniform mat4 u_ViewProj;
uniform float u_Time;

in vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place
in vec4 vs_Nor; // Non-instanced, and presently unused
in vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color
in vec2 vs_UV; // Non-instanced, and presently unused in main(). Feel free to use it for your meshes.

out vec4 fs_Col;
out vec4 fs_Pos;
out vec4 fs_Nor;

void main()
{
    if (vs_Col.z > 0.5) { // ground
        vec3 red = vec3(1.0, 0.0, 0.0);
        vec3 green = vec3(0.0, 1.0, 0.0);
        vec3 color = mix(red, green, 1.0 - vs_Col.y);
        fs_Col = vec4(color, 1.0);
    } else {
        fs_Col = vec4(vec3(0.0, 0.0, 1.0), 1.0);
    }
    fs_Pos = vs_Pos;
    fs_Nor = vs_Nor;
    gl_Position = u_ViewProj * vs_Pos;
}