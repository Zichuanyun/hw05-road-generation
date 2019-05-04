# Procedural Road and City Generation

This project tries to generate a reasonable road and city rendering in pure procedural way. The base terrain and population are based on cellular noise (Worley noise). The roads and buildings are generated based on the population.

**University of Pennsylvania, CIS 566 Procedrual Graphics, Procedural Road and City Generation**

* Zichuan Yu
  * [LinkedIn](https://www.linkedin.com/in/zichuan-yu/), [Behance](https://www.behance.net/zainyu717ebcc)
* Tested on: Macbook Pro macOS High Sierra Version 10.13.6 (17G66), i7-4870HQ @ 2.50GHz 16GB, AMD Radeon R9 M370X 2048 MB, Intel Iris Pro 1536 MB

## Results

- 一整张最后效果
- 陆地高度图
- 陆地和海洋图
- 人口密度图

## Randomness

## Terrain and Population

### Terrain

### Population


## Credits

* [dat.gui](https://github.com/dataarts/dat.gui)
* [Procedural Modeling of Cities](https://dl.acm.org/citation.cfm?id=383292)
* [Real-time Procedural Generation of ‘Pseudo Infinite’ Cities](https://dl.acm.org/citation.cfm?doid=604471.604490)

#### Basics

|![albedo](img/albedo.gif)|![normal](img/normal.gif)|![lighting](img/lighting.gif)|
|-|-|-|
|Albedo|Normal|Lambert + Blinn-phong|

#### Line and point rendering

|![line_render](img/line_render.gif)|![point_render](img/point_render.gif)|
|-|-|
|Line|Point|

#### Perspective correct UV and bilinear texture 

|![incorrect_uv](img/incorrect_uv.gif)|![correct_uv](img/correct_uv.gif)|
|-|-|
|Incorrect UV|Correct UV|

### Performance Analysis

#### Time spent in each stage

To give guarantee enough operations for each step, all the features are turned on.

![breakdown](img/breakdown.png)

We can clearly see that the more space an onject took the window, the more time is spent on rasterization. Rasterization in our implementation is of heavy work.

#### Performance impact of backface culling

![fps](img/fps.png)

As we can see, there's no significant improvement after we add backface culling (even drawbacks). This indicate that in our naive implementation of backface culling (mainly the backface detection part) has more overhead than contribution in these models.