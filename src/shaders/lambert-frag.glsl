#version 300 es
precision highp float;


uniform float u_Time;

in vec4 fs_Col;
in vec4 fs_Pos;
in vec4 fs_Nor;

out vec4 out_Col;

void main()
{
    float time = u_Time / 60.0;
    float lightDis = 20.0;
    vec3 lightPos = vec3(lightDis * sin(time), lightDis, lightDis * cos(time));
    float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);
    vec3 norCol = (vec3(fs_Nor) + vec3(1.0)) * 0.5;
    out_Col = vec4(norCol, 1.0);
    vec3 lightDir = normalize(lightPos - vec3(fs_Pos));
    float NdotL = max(dot(lightDir, vec3(fs_Nor)), 0.0);
    float diffuse = max(0.2, NdotL);
    out_Col = vec4(vec3(diffuse), 1.0);
    out_Col = vec4(vec3(fs_Col) * diffuse, 1.0);
}
