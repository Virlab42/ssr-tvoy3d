'use client'
import './Footer.scss'
import Link from "next/link";

function Footer(){
    return(
        <>
            <footer>
              <div className='logo-block'>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="55.000000pt" height="55.000000pt" viewBox="270 0 720.000000 720.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'rgba(219,17,37,1)'}} />
                      <stop offset="100%" style={{stopColor:'rgba(133,14,48,1)'}} />
                    </linearGradient>
                  </defs>
                  <g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)"
                  fill="currentColor" stroke="none">
                  <path d="M6113 7040 c-84 -22 -137 -47 -219 -106 l-61 -43 -49 16 c-69 22
                  -258 22 -349 -1 -111 -27 -210 -80 -282 -151 l-64 -62 -112 4 c-137 6 -231
                  -12 -333 -62 -78 -38 -159 -111 -199 -179 -19 -32 -45 -55 -94 -85 -61 -36
                  -141 -109 -141 -129 0 -4 -28 -13 -62 -19 -132 -25 -276 -122 -349 -236 -34
                  -52 -67 -134 -83 -207 -3 -16 -23 -36 -51 -53 -56 -36 -110 -98 -130 -151 -11
                  -28 -27 -48 -53 -62 -59 -34 -127 -99 -167 -159 -55 -84 -75 -153 -82 -285
                  l-6 -115 -48 -43 c-56 -50 -97 -130 -106 -205 -4 -33 -15 -62 -29 -80 -33 -40
                  -80 -141 -99 -217 -23 -90 -21 -218 4 -300 l21 -65 -38 -74 c-36 -72 -37 -78
                  -39 -190 -1 -64 -9 -150 -18 -191 -42 -187 16 -389 150 -527 48 -50 50 -53 38
                  -82 -7 -16 -18 -62 -24 -101 -24 -156 35 -312 165 -438 l74 -72 -11 -38 c-18
                  -63 -12 -236 12 -337 62 -257 202 -387 484 -449 25 -6 27 -10 27 -59 0 -131
                  54 -253 159 -357 91 -90 176 -135 296 -158 l83 -16 12 -40 c37 -127 154 -269
                  268 -329 132 -68 227 -82 406 -60 l120 15 34 -44 c60 -74 168 -172 221 -201
                  68 -37 174 -58 296 -58 115 -1 182 12 243 46 l43 24 52 -39 c107 -82 276 -107
                  412 -62 33 11 97 22 142 25 88 7 211 43 279 82 l41 24 64 -21 c86 -28 267 -30
                  354 -4 118 36 218 103 289 196 31 41 44 50 70 50 54 0 168 29 222 55 28 14 72
                  43 97 65 25 22 50 40 57 40 6 0 46 12 88 26 97 32 200 101 257 171 44 54 97
                  153 110 206 4 15 33 56 65 91 32 35 62 71 66 78 5 8 40 22 77 32 254 62 403
                  251 422 531 6 88 11 109 43 173 34 66 43 75 102 110 200 115 314 340 280 554
                  -6 39 -20 97 -31 130 -20 60 -20 61 -1 102 11 22 27 66 36 98 9 33 31 74 53
                  100 81 96 119 233 111 398 -3 74 -9 97 -41 165 -21 43 -53 100 -71 125 l-34
                  47 15 54 c9 36 14 98 12 189 0 74 2 173 6 220 11 144 -29 280 -116 390 -22 28
                  -54 60 -72 71 l-32 22 -1 91 c-3 212 -102 407 -258 508 -33 21 -83 45 -111 53
                  l-50 15 -12 60 c-6 32 -25 87 -42 121 -17 34 -31 73 -31 85 0 33 -43 143 -76
                  195 -41 66 -121 146 -183 184 -64 39 -183 80 -257 90 -49 6 -52 8 -65 47 -23
                  69 -104 175 -177 228 -126 94 -304 144 -429 122 -38 -6 -79 -15 -92 -18 -16
                  -5 -22 -4 -17 4 3 6 2 13 -4 17 -5 3 -28 37 -50 74 -71 122 -200 215 -355 255
                  -76 20 -210 20 -288 0 -59 -15 -166 -63 -194 -86 -8 -7 -13 -7 -13 0 0 17
                  -121 110 -191 147 -124 65 -253 80 -386 45z m250 -56 c34 -9 73 -22 87 -30 15
                  -10 17 -13 5 -8 -11 3 -63 9 -116 11 -115 7 -200 -15 -289 -71 -94 -60 -94
                  -60 -125 -40 l-27 18 24 18 c38 31 155 88 211 103 70 19 156 18 230 -1z m132
                  -120 c74 -32 163 -89 230 -147 l40 -34 -58 -62 c-31 -34 -57 -66 -57 -71 0 -5
                  -26 0 -57 12 -37 13 -94 22 -158 25 -110 6 -109 6 -292 -77 l-72 -33 -33 29
                  c-19 16 -64 49 -100 73 -80 51 -80 49 20 154 74 76 136 119 213 148 84 30 230
                  23 324 -17z m686 10 c79 -24 178 -76 226 -120 39 -35 137 -183 128 -192 -2 -2
                  -32 19 -67 48 -166 135 -413 187 -590 123 l-56 -21 -48 43 -49 42 55 28 c30
                  16 80 36 110 46 72 23 217 25 291 3z m-1448 -19 c74 -15 181 -60 175 -72 -1
                  -5 -23 -36 -48 -70 l-45 -63 -40 8 c-22 4 -96 7 -165 6 -106 -1 -137 -5 -205
                  -27 -91 -30 -183 -82 -236 -134 -32 -30 -41 -34 -69 -28 -29 6 -31 9 -25 38
                  12 60 58 139 111 193 61 61 185 126 274 143 30 6 64 13 75 15 45 9 134 5 198
                  -9z m1497 -183 c31 -11 80 -32 110 -47 62 -32 177 -143 202 -195 9 -19 24 -52
                  35 -73 18 -38 18 -38 -2 -49 -11 -6 -44 -34 -72 -63 l-53 -52 -72 19 c-88 23
                  -238 20 -308 -5 -41 -16 -46 -16 -55 -1 -75 122 -149 203 -240 262 l-74 49 28
                  39 c45 60 127 113 208 134 60 15 230 5 293 -18z m-2187 -40 c3 -4 -4 -36 -16
                  -70 -18 -56 -23 -63 -41 -58 -49 14 -186 18 -250 7 -80 -14 -167 -50 -218 -92
                  -45 -36 -48 -26 -10 27 71 98 185 166 312 187 45 8 219 7 223 -1z m781 -60
                  c38 -18 98 -53 133 -78 l64 -46 -35 -38 c-37 -41 -71 -102 -101 -183 -13 -35
                  -22 -46 -33 -42 -50 19 -131 16 -230 -9 -132 -34 -194 -62 -265 -119 l-57 -47
                  -44 34 c-24 18 -77 46 -116 62 l-72 28 5 63 c10 134 111 272 247 341 107 53
                  198 73 325 69 100 -3 117 -6 179 -35z m2058 -41 c202 -52 338 -177 392 -360
                  26 -90 21 -99 -25 -41 -49 63 -143 133 -228 172 -73 33 -215 53 -311 43 l-55
                  -6 -42 83 c-23 45 -40 84 -38 86 11 11 146 41 186 41 25 1 80 -8 121 -18z
                  m-1341 -17 c112 -33 209 -92 299 -184 47 -47 93 -102 104 -122 l18 -36 -39
                  -39 c-34 -34 -135 -174 -144 -201 -3 -7 -21 -7 -54 -1 -101 20 -253 -10 -363
                  -73 -29 -17 -54 -29 -55 -27 -2 2 -29 37 -61 77 -68 84 -159 163 -250 216 -63
                  37 -64 38 -54 69 25 79 79 176 110 200 18 14 89 50 158 81 115 51 131 55 201
                  56 41 0 100 -7 130 -16z m-1523 -79 c65 -18 71 -27 46 -60 -22 -29 -54 -141
                  -54 -190 l0 -42 -112 -5 c-97 -4 -124 -9 -193 -37 -105 -42 -179 -94 -240
                  -169 -47 -57 -52 -61 -90 -59 l-40 2 2 70 c6 235 166 448 378 502 65 17 223
                  10 303 -12z m-648 -159 c-4 -20 -10 -40 -13 -42 -2 -2 -22 -1 -43 4 l-39 8 50
                  36 c27 20 51 36 52 35 1 -2 -2 -20 -7 -41z m3595 -16 c68 -23 128 -62 199
                  -129 70 -67 99 -115 121 -200 17 -68 32 -231 21 -231 -4 0 -35 10 -69 22 -86
                  30 -218 30 -306 0 -35 -12 -65 -21 -66 -20 -1 2 -9 32 -19 68 -40 149 -136
                  277 -267 355 -35 21 -66 40 -68 42 -8 6 44 55 85 79 23 14 62 29 85 33 62 13
                  225 2 284 -19z m-3648 -102 c-2 -13 -12 -50 -21 -83 -9 -33 -19 -90 -23 -127
                  -5 -62 -8 -67 -27 -63 -64 13 -118 14 -163 5 -62 -14 -181 -82 -250 -144 -28
                  -25 -54 -46 -57 -46 -19 0 11 136 45 208 43 87 144 183 239 224 58 26 152 46
                  214 47 45 1 48 0 43 -21z m3042 -3 c91 -22 214 -89 288 -159 72 -67 122 -158
                  148 -268 15 -67 15 -68 -14 -150 -54 -156 -45 -144 -101 -128 -120 36 -288 31
                  -372 -10 -23 -11 -43 -20 -44 -20 -1 0 -8 17 -14 38 -7 20 -31 73 -53 117 -55
                  108 -179 233 -289 291 l-77 40 46 70 c62 94 90 123 143 147 108 49 222 59 339
                  32z m1073 -24 c155 -40 278 -130 342 -251 l30 -55 -49 43 c-86 76 -231 132
                  -340 132 l-52 0 -9 75 c-5 41 -7 75 -3 75 3 0 40 -9 81 -19z m-2543 -21 c29
                  -11 77 -36 106 -55 66 -42 189 -157 233 -218 l32 -46 -30 -21 c-36 -26 -115
                  -144 -146 -218 l-22 -54 -78 -3 c-115 -5 -271 -63 -379 -142 l-39 -29 -43 57
                  c-55 75 -161 162 -245 202 l-68 32 0 60 c0 65 17 142 43 191 18 34 117 128
                  183 174 39 27 102 51 224 85 69 19 159 13 229 -15z m-749 -71 c120 -59 117
                  -54 75 -124 -45 -76 -55 -110 -62 -216 l-6 -87 -76 -11 c-118 -19 -260 -60
                  -325 -94 -32 -17 -85 -58 -118 -90 l-59 -60 -37 17 c-20 9 -59 23 -87 30 -48
                  12 -50 14 -58 57 -4 24 -6 88 -4 141 3 84 8 106 36 162 43 88 152 203 233 246
                  110 59 159 70 293 67 115 -2 123 -3 195 -38z m3379 -114 c142 -37 265 -141
                  338 -283 23 -45 45 -98 49 -117 5 -30 -17 -238 -32 -286 -4 -15 -10 -16 -57
                  -4 -29 7 -73 16 -99 20 -46 6 -47 7 -62 58 -31 104 -128 233 -235 312 l-48 34
                  -7 108 c-3 60 -9 123 -12 141 l-6 32 58 0 c33 0 83 -7 113 -15z m-1713 -80
                  c90 -34 193 -104 254 -173 55 -62 124 -192 139 -261 9 -42 7 -49 -23 -100 -19
                  -31 -62 -107 -96 -169 l-62 -112 -52 7 c-113 17 -237 6 -362 -32 -17 -5 -28 6
                  -68 67 -99 149 -152 213 -239 285 -49 41 -109 84 -133 96 -24 11 -44 25 -44
                  30 0 19 63 133 100 183 65 86 219 177 345 204 62 14 168 2 241 -25z m-2513
                  -32 c63 -14 68 -17 62 -37 -35 -110 -45 -245 -26 -328 10 -41 13 -39 -90 -53
                  -25 -3 -72 -18 -105 -34 -67 -32 -231 -172 -264 -226 -12 -19 -24 -35 -26 -35
                  -20 0 -75 32 -84 49 -34 65 -30 352 6 424 51 98 201 218 324 258 30 10 111 3
                  203 -18z m3938 -153 c160 -59 324 -219 365 -355 19 -66 17 -232 -5 -320 -9
                  -38 -21 -69 -27 -68 -5 1 -40 14 -79 29 -83 31 -202 41 -289 25 -33 -6 -61 -9
                  -63 -7 -2 1 -10 29 -18 61 -9 32 -30 86 -47 119 -39 74 -163 201 -234 241
                  l-50 28 21 56 c12 31 30 77 39 102 14 38 25 51 66 73 27 15 69 31 92 36 63 13
                  165 5 229 -20z m-4514 -53 c-3 -11 -108 -39 -117 -30 -3 2 20 28 49 56 l55 52
                  8 -33 c5 -19 7 -39 5 -45z m1552 -84 c66 -34 192 -150 227 -208 l25 -43 -30
                  -49 c-43 -69 -80 -174 -88 -243 l-6 -59 -56 -6 c-220 -22 -396 -107 -478 -230
                  -20 -30 -38 -55 -41 -55 -2 0 -53 25 -112 56 l-108 56 -15 56 c-37 135 -48
                  288 -27 380 36 154 161 276 332 322 208 56 299 62 377 23z m-1585 -25 c-10
                  -47 -7 -287 4 -325 9 -29 8 -32 -16 -38 -53 -13 -177 -77 -231 -118 -30 -23
                  -71 -63 -92 -90 -21 -26 -40 -43 -43 -39 -3 5 -8 52 -12 104 -12 172 22 283
                  118 384 60 63 126 107 199 134 76 27 82 26 73 -12z m2437 -95 c69 -32 193
                  -130 242 -191 16 -20 61 -83 99 -140 l69 -103 -48 -56 c-29 -34 -82 -123 -133
                  -222 l-85 -166 -175 0 c-112 0 -187 -5 -209 -13 -33 -12 -34 -11 -140 77 -121
                  101 -242 224 -267 272 -35 68 -3 212 77 345 39 64 120 127 224 175 146 66 240
                  72 346 22z m1533 -9 c182 -47 333 -184 393 -357 23 -64 25 -83 21 -177 -4 -81
                  -11 -121 -31 -173 -36 -94 -88 -177 -109 -177 -10 0 -66 14 -125 30 -58 16
                  -123 30 -142 30 -32 0 -116 -16 -191 -34 -23 -6 -26 -3 -42 51 -38 128 -183
                  319 -299 393 -27 18 -49 34 -49 36 0 3 35 66 78 140 83 147 135 215 179 233
                  80 33 200 35 317 5z m1414 -22 c169 -78 294 -339 263 -548 -6 -40 -21 -98 -33
                  -131 l-22 -58 -8 75 c-21 204 -116 363 -272 454 -36 21 -66 41 -66 45 0 3 7
                  47 15 96 8 50 15 93 15 98 0 11 48 -2 108 -31z m-4601 -38 c72 -24 74 -27 50
                  -87 -31 -73 -30 -316 0 -425 13 -50 16 -75 9 -76 -174 -41 -333 -144 -431
                  -279 l-20 -28 -97 42 c-111 48 -114 52 -144 200 -22 107 -15 189 27 304 31 87
                  35 93 135 192 66 64 122 110 156 127 91 44 233 58 315 30z m4348 -161 c185
                  -46 314 -164 368 -338 17 -56 22 -95 22 -190 0 -108 -3 -126 -28 -184 -15 -35
                  -41 -85 -57 -112 l-31 -47 -54 24 c-29 14 -82 27 -118 31 l-65 6 -6 69 c-14
                  138 -78 283 -170 384 l-52 58 18 65 c10 36 21 104 24 151 3 47 7 91 10 98 4
                  14 35 11 139 -15z m-5044 -106 l45 -23 -24 -70 c-21 -58 -25 -87 -25 -184 0
                  -97 4 -127 26 -195 15 -44 27 -83 27 -86 0 -4 -35 -27 -78 -52 -95 -55 -179
                  -129 -222 -198 -31 -47 -35 -50 -64 -43 -64 14 -74 23 -110 96 -66 134 -79
                  227 -51 363 39 186 166 320 375 395 30 10 55 19 55 20 0 0 21 -11 46 -23z
                  m3174 -87 c164 -24 293 -136 400 -349 51 -102 55 -150 17 -239 -26 -62 -156
                  -289 -197 -346 -13 -17 -19 -17 -102 -6 -48 7 -161 14 -250 15 l-163 3 -102
                  138 c-56 77 -126 171 -156 209 -31 39 -59 75 -64 81 -5 7 23 74 73 173 84 168
                  155 263 222 298 53 27 212 38 322 23z m1470 -75 c86 -23 149 -61 215 -132 120
                  -128 181 -321 151 -479 -21 -109 -99 -262 -132 -257 -8 1 -48 11 -89 22 -113
                  31 -269 52 -312 42 l-36 -8 -22 66 c-28 87 -66 151 -139 238 l-60 72 45 78
                  c54 94 83 184 92 278 l7 70 45 12 c64 16 166 16 235 -2z m-5165 -42 c0 -10 3
                  -27 6 -39 4 -16 -6 -27 -55 -56 -65 -38 -71 -36 -45 15 40 79 94 124 94 80z
                  m2186 -50 c34 -59 173 -198 282 -283 45 -35 82 -66 82 -70 0 -3 -16 -22 -36
                  -41 -54 -51 -116 -143 -168 -247 -51 -102 -106 -255 -106 -296 0 -32 -5 -32
                  -41 -1 -56 46 -252 98 -429 113 l-84 7 -34 83 c-49 123 -65 209 -59 327 7 130
                  34 208 95 276 77 85 179 136 330 163 131 24 136 23 168 -31z m4070 -228 c35
                  -72 54 -148 54 -219 l0 -41 -37 63 c-35 59 -113 141 -176 187 l-28 20 24 55
                  c13 30 27 64 31 74 6 17 12 15 52 -25 25 -24 61 -75 80 -114z m-6276 75 c-23
                  -121 -8 -221 51 -349 21 -46 39 -88 39 -92 0 -5 -13 -15 -28 -23 -49 -25 -134
                  -109 -173 -169 l-38 -59 -21 34 c-117 190 -87 464 68 631 43 46 102 91 109 83
                  2 -1 -1 -27 -7 -56z m1460 -31 l117 -60 -13 -57 c-30 -127 -11 -296 51 -451
                  l34 -85 -22 -14 c-54 -36 -150 -149 -184 -219 -20 -41 -41 -72 -47 -70 -6 2
                  -109 28 -230 58 l-218 54 -38 75 c-87 172 -102 295 -55 435 54 163 133 252
                  295 335 51 26 146 59 174 59 10 1 71 -26 136 -60z m4710 -178 c105 -107 154
                  -248 148 -420 -3 -97 -6 -112 -39 -181 -20 -41 -55 -97 -79 -123 -55 -62 -70
                  -53 -70 47 0 88 -31 219 -71 303 -17 36 -57 92 -91 128 l-60 64 21 29 c33 47
                  89 170 96 212 l7 40 41 -22 c23 -11 67 -46 97 -77z m-1617 33 c126 -36 155
                  -53 222 -126 121 -134 174 -306 142 -460 -17 -85 -66 -191 -125 -271 -69 -92
                  -52 -88 -252 -61 -202 27 -299 43 -320 54 -9 5 -24 31 -34 60 -22 60 -93 171
                  -163 254 l-50 60 67 105 c77 121 141 245 165 318 17 51 17 51 78 67 129 33
                  155 33 270 0z m-1503 -39 c22 -20 279 -360 307 -406 15 -24 10 -35 -138 -293
                  l-154 -267 -260 3 c-146 2 -268 8 -278 14 -27 15 -144 179 -177 249 -37 77
                  -38 127 -6 221 27 80 116 261 157 319 40 58 114 132 152 152 53 28 86 32 233
                  30 126 -2 144 -4 164 -22z m-2319 -21 c46 -19 85 -36 86 -38 1 -1 -9 -38 -23
                  -81 -28 -88 -33 -186 -15 -267 15 -65 57 -174 87 -225 l24 -42 -42 -29 c-52
                  -36 -136 -124 -165 -172 -11 -19 -28 -56 -38 -82 l-17 -46 -49 14 c-132 39
                  -185 77 -244 174 -79 130 -102 267 -69 413 41 180 123 280 307 378 40 21 73
                  39 74 39 1 0 39 -16 84 -36z m5053 -152 c65 -29 181 -143 216 -213 46 -91 73
                  -210 68 -306 -4 -71 -10 -93 -43 -159 -25 -48 -63 -102 -104 -145 l-66 -68
                  -95 14 c-176 27 -159 19 -148 68 16 70 3 212 -27 297 -27 74 -96 203 -115 215
                  -6 4 5 24 25 48 44 51 80 126 103 213 l17 66 61 -5 c33 -2 82 -14 108 -25z
                  m-5560 -122 c2 -3 -4 -41 -15 -85 -23 -97 -24 -200 -4 -280 19 -73 67 -177
                  102 -224 l27 -34 -25 -16 c-54 -34 -137 -130 -168 -194 l-32 -67 -43 29 c-86
                  60 -154 155 -179 252 -67 257 9 487 204 612 49 31 56 33 90 23 21 -6 40 -14
                  43 -16z m4991 -126 c164 -31 179 -38 224 -107 119 -183 151 -369 92 -532 -26
                  -73 -100 -185 -150 -225 -45 -38 -78 -38 -271 -5 -230 41 -212 31 -233 122
                  -16 71 -50 155 -87 210 -13 20 -10 26 39 90 93 120 151 272 163 423 3 30 7 36
                  33 41 35 7 80 3 190 -17z m-1380 -44 c76 -11 82 -13 115 -52 111 -130 186
                  -256 196 -330 7 -53 -7 -109 -52 -208 -39 -84 -164 -275 -218 -332 l-35 -38
                  -218 0 -218 0 -140 212 c-77 116 -140 217 -140 223 0 7 68 130 150 273 137
                  238 153 261 180 265 46 8 290 -1 380 -13z m-4020 -94 c-7 -6 -32 -33 -56 -61
                  l-42 -50 5 56 c4 30 16 77 28 103 l23 47 28 -42 c23 -35 25 -45 14 -53z m2080
                  29 c250 -38 346 -89 413 -220 11 -22 50 -82 86 -133 l67 -92 -39 -58 c-116
                  -172 -182 -310 -182 -381 0 -16 -4 -32 -10 -36 -5 -3 -91 -1 -192 6 -186 11
                  -313 32 -411 69 -54 20 -54 20 -100 118 -102 216 -112 358 -34 522 21 46 53
                  88 107 143 l78 77 58 0 c33 0 104 -7 159 -15z m4496 -232 c40 -77 44 -94 48
                  -169 1 -46 -2 -114 -9 -151 -12 -72 -47 -163 -61 -163 -5 0 -9 29 -9 64 0 110
                  -61 259 -141 342 l-29 30 36 35 c20 18 49 53 66 77 37 53 41 50 99 -65z
                  m-6565 -156 c22 -85 55 -145 115 -212 37 -40 50 -61 43 -69 -5 -7 -31 -46 -58
                  -87 -27 -41 -51 -76 -54 -79 -2 -3 -25 18 -50 46 -154 166 -174 432 -48 621
                  l21 33 8 -97 c4 -53 14 -123 23 -156z m1349 142 l210 -52 1 -116 c0 -103 4
                  -126 32 -208 17 -51 45 -120 62 -153 l31 -61 -45 -57 c-52 -66 -102 -166 -111
                  -224 -9 -54 -31 -61 -191 -56 -129 3 -132 4 -210 42 -92 46 -178 127 -213 201
                  -30 64 -59 184 -67 275 -10 128 33 263 114 352 45 49 129 108 157 108 11 0
                  115 -23 230 -51z m5005 -110 c89 -107 120 -193 120 -334 0 -169 -50 -305 -145
                  -399 -51 -50 -177 -127 -189 -115 -3 3 2 27 10 54 39 127 25 335 -34 503 l-29
                  81 25 23 c42 40 109 132 138 191 16 31 34 57 41 57 7 0 35 -27 63 -61z m-1883
                  -18 c32 -6 141 -22 242 -36 112 -15 188 -30 194 -37 4 -7 24 -45 43 -83 58
                  -120 78 -265 53 -401 -16 -88 -79 -212 -134 -263 -91 -84 -257 -141 -409 -141
                  l-72 0 -39 81 c-36 77 -133 198 -238 298 l-36 34 39 46 c110 133 237 359 261
                  467 8 37 17 53 25 50 7 -3 39 -10 71 -15z m-3872 -87 c26 -15 78 -37 117 -49
                  l69 -22 4 -99 c4 -108 38 -262 74 -333 12 -23 38 -60 57 -81 l36 -40 -43 -48
                  c-59 -66 -97 -138 -114 -218 -7 -36 -16 -68 -19 -71 -11 -12 -147 41 -204 78
                  -77 51 -158 138 -200 217 -119 222 -58 540 127 662 24 17 45 30 46 30 2 0 24
                  -12 50 -26z m2382 -32 l262 -4 140 -212 c78 -116 141 -217 141 -224 0 -7 -16
                  -45 -36 -85 -114 -226 -205 -338 -309 -378 -51 -19 -79 -23 -190 -23 -204 -1
                  -294 31 -392 138 -104 115 -145 246 -123 388 13 90 46 161 140 306 56 88 76
                  112 89 106 9 -4 134 -9 278 -12z m2917 -82 c71 -10 132 -22 136 -27 30 -32 80
                  -261 80 -361 -1 -145 -60 -310 -142 -392 -46 -46 -168 -109 -251 -129 -46 -11
                  -49 -11 -90 21 -23 18 -43 33 -44 33 0 0 10 34 24 75 48 143 43 325 -14 467
                  l-25 63 60 64 c36 39 74 93 94 135 18 38 35 70 38 70 3 0 63 -8 134 -19z
                  m-5639 -286 c1 -117 5 -149 24 -204 31 -89 81 -168 149 -237 l57 -58 -29 -44
                  c-16 -25 -40 -69 -52 -100 -13 -31 -27 -57 -32 -59 -17 -5 -138 82 -198 143
                  -111 113 -157 246 -134 384 13 80 73 210 136 294 33 46 37 48 57 34 20 -13 21
                  -23 22 -153z m4970 50 c72 -14 165 -28 207 -31 l77 -6 24 -56 c37 -83 51 -168
                  44 -279 -10 -164 -53 -257 -179 -379 -108 -104 -203 -134 -310 -97 -39 13 -68
                  39 -182 164 -75 82 -136 153 -136 157 0 4 19 19 42 32 145 83 242 249 255 439
                  4 49 10 82 17 82 6 0 70 -12 141 -26z m-3389 -109 c118 -34 177 -43 379 -55
                  99 -7 183 -16 186 -22 4 -5 9 -33 12 -61 9 -74 65 -183 130 -254 32 -33 57
                  -63 57 -65 0 -7 -206 -319 -224 -339 -29 -34 -192 -69 -316 -69 -245 1 -389
                  102 -467 327 -35 104 -37 244 -5 348 33 109 119 232 152 220 8 -4 52 -17 96
                  -30z m2449 -345 c22 -43 35 -84 35 -107 -1 -97 -57 -245 -122 -319 -48 -54
                  -199 -150 -276 -175 -54 -18 -91 -22 -194 -22 -119 1 -130 2 -172 27 -81 47
                  -155 152 -237 334 l-46 104 55 56 c69 71 123 155 196 299 l56 113 217 2 217 3
                  118 -122 c88 -92 127 -141 153 -193z m2156 36 c20 -144 -25 -288 -121 -390
                  -50 -53 -127 -113 -134 -105 -2 2 0 29 6 59 14 75 3 231 -21 310 -12 36 -21
                  70 -21 75 0 6 34 28 76 49 42 21 99 60 127 87 l52 48 13 -30 c7 -16 17 -63 23
                  -103z m-5391 69 c95 -60 133 -69 297 -69 l153 -1 0 -40 c1 -61 25 -183 50
                  -248 12 -33 42 -87 66 -123 l43 -63 -29 -63 c-16 -35 -39 -99 -50 -142 -23
                  -91 -31 -103 -85 -127 -108 -49 -340 13 -473 126 -45 39 -113 146 -149 235
                  -45 112 -42 286 7 397 18 42 104 143 122 143 4 0 26 -11 48 -25z m5076 -265
                  c39 -194 -14 -409 -133 -541 -47 -51 -159 -106 -257 -124 -44 -9 -81 -14 -83
                  -12 -2 2 11 35 29 73 32 68 33 72 33 209 0 77 -4 170 -8 206 l-9 65 53 12
                  c124 29 270 125 314 206 19 36 20 36 32 13 6 -13 19 -61 29 -107z m-1282 -91
                  c165 -182 158 -164 127 -316 -28 -133 -67 -201 -153 -264 -38 -27 -97 -66
                  -132 -85 -111 -61 -331 -103 -385 -75 -10 6 -36 34 -59 64 -41 53 -192 295
                  -192 308 0 4 29 25 64 48 74 49 151 126 188 191 27 46 62 148 72 211 l6 36
                  108 6 c82 5 190 23 208 36 1 1 67 -71 148 -160z m-4234 84 c36 -17 88 -36 116
                  -42 l51 -12 6 -64 c13 -134 94 -302 192 -394 l54 -51 -19 -43 c-19 -42 -34
                  -99 -45 -169 -6 -42 -2 -41 -120 -16 -151 32 -291 139 -354 271 -64 133 -78
                  319 -32 422 30 69 71 137 79 133 4 -2 36 -18 72 -35z m2076 3 c57 -29 151 -47
                  264 -52 94 -5 128 -2 190 14 41 11 76 19 76 18 1 0 28 -58 62 -128 69 -146
                  116 -221 178 -281 l43 -43 -40 -82 c-49 -98 -144 -205 -217 -245 -66 -36 -215
                  -67 -324 -67 -108 0 -169 21 -270 93 -115 82 -182 199 -209 366 -8 53 -7 68 9
                  105 17 38 198 316 206 316 1 0 16 -7 32 -14z m2912 -84 c30 -25 34 -35 48
                  -122 10 -61 14 -134 12 -206 -4 -101 -7 -118 -36 -177 -46 -92 -156 -208 -235
                  -247 -74 -35 -158 -58 -249 -66 l-66 -7 -35 69 c-20 38 -53 93 -76 123 l-40
                  54 29 42 c38 56 65 126 80 206 6 35 13 73 15 84 4 18 12 21 78 22 90 1 176 24
                  240 65 45 29 177 163 177 180 0 16 26 7 58 -20z m-5272 -98 l44 -26 0 -58 c0
                  -149 69 -326 163 -422 52 -52 162 -128 186 -128 11 0 16 -52 5 -62 -9 -10
                  -115 22 -189 56 -137 64 -214 167 -256 342 -28 119 -30 324 -3 324 3 0 25 -12
                  50 -26z m1431 -164 c80 -49 159 -65 318 -64 109 1 157 6 215 22 79 22 90 19
                  90 -23 1 -91 79 -264 156 -345 l56 -59 -30 -64 c-35 -76 -120 -165 -190 -199
                  -69 -33 -219 -38 -333 -9 -365 91 -504 361 -363 705 15 36 29 66 30 66 2 0 24
                  -13 51 -30z m2279 -208 c62 -110 141 -229 185 -277 41 -44 42 -47 31 -84 -18
                  -57 -83 -151 -138 -199 -93 -81 -288 -162 -389 -162 -130 0 -265 48 -321 114
                  -19 22 -64 97 -99 166 l-64 126 67 45 c80 54 148 135 204 245 41 79 43 82 68
                  72 14 -6 84 -10 155 -10 102 0 143 4 190 19 33 11 63 18 67 16 3 -2 23 -34 44
                  -71z m-2906 -63 c137 -66 285 -87 376 -52 l50 20 12 -66 c16 -93 71 -198 141
                  -270 l59 -59 -18 -60 c-10 -33 -22 -88 -26 -122 -4 -34 -13 -67 -20 -75 -23
                  -23 -157 -30 -246 -12 -119 24 -199 65 -278 146 -120 121 -174 270 -150 408 9
                  54 46 163 54 163 1 0 22 -10 46 -21z m4883 -46 c-6 -76 -18 -112 -63 -203 -42
                  -82 -82 -128 -149 -171 -42 -27 -168 -75 -176 -67 -2 2 3 31 12 63 11 40 17
                  101 17 182 l1 122 70 12 c89 15 167 43 230 85 28 18 53 33 57 33 4 1 4 -25 1
                  -56z m-1098 -90 c19 -27 51 -79 71 -117 36 -69 37 -70 26 -130 -19 -99 -72
                  -195 -148 -265 -75 -69 -229 -152 -312 -170 -84 -17 -210 -14 -257 8 -50 22
                  -111 90 -154 171 l-32 60 31 27 c69 57 103 101 143 185 l42 87 56 1 c69 0 236
                  41 304 75 28 13 79 45 115 69 36 25 68 45 72 45 4 1 23 -20 43 -46z m685 -90
                  c0 -96 -23 -209 -57 -280 -39 -82 -130 -170 -228 -220 -95 -48 -157 -63 -268
                  -63 l-83 0 -39 41 c-35 35 -38 41 -23 50 26 14 108 129 133 184 12 28 28 75
                  34 106 l12 55 93 12 c162 20 306 86 379 173 39 46 47 38 47 -58z m-4760 -12
                  c19 -5 56 -12 83 -16 40 -5 47 -9 47 -29 0 -37 37 -133 74 -195 72 -119 180
                  -207 311 -253 69 -25 70 -26 73 -63 2 -24 -2 -41 -10 -46 -21 -14 -167 -10
                  -241 6 -90 19 -174 65 -242 134 -68 69 -89 100 -115 169 -23 62 -42 210 -34
                  264 7 42 6 41 54 29z m2060 -69 c75 -2 131 3 195 16 50 11 90 19 90 18 1 0 29
                  -57 63 -126 77 -156 118 -212 182 -248 l50 -29 -56 -62 c-68 -75 -161 -143
                  -246 -179 -56 -24 -75 -27 -178 -26 -192 0 -287 34 -393 141 -72 72 -117 160
                  -139 267 l-10 51 65 66 c40 41 75 88 93 126 l28 60 76 -36 c69 -33 83 -36 180
                  -39z m-980 -189 c134 -51 325 -69 426 -38 27 8 51 11 54 7 3 -4 12 -29 18 -57
                  25 -99 78 -193 151 -266 l68 -68 -26 -24 c-40 -38 -108 -73 -196 -103 -133
                  -44 -239 -27 -431 67 -97 49 -147 98 -191 186 -26 54 -26 57 -15 142 7 48 19
                  110 28 140 12 43 18 51 32 46 9 -4 46 -18 82 -32z m2225 -262 c20 -28 48 -59
                  62 -69 26 -19 26 -21 15 -60 -27 -89 -141 -209 -264 -277 -95 -52 -249 -68
                  -393 -40 -99 19 -168 51 -231 108 -52 47 -107 137 -89 143 58 22 248 187 281
                  245 8 15 15 16 79 2 97 -21 200 -12 306 27 46 16 98 38 114 48 l30 19 27 -49
                  c14 -26 43 -70 63 -97z m-2402 -64 c49 -100 120 -166 240 -222 108 -51 223
                  -85 289 -85 37 0 50 -4 58 -20 9 -16 4 -22 -33 -44 -157 -92 -376 -98 -544
                  -16 -45 22 -82 52 -133 108 -92 100 -122 161 -128 261 l-4 76 48 -3 c38 -2
                  165 10 170 17 1 0 17 -32 37 -72z m3147 -33 c-31 -97 -86 -190 -150 -255 -111
                  -113 -231 -159 -421 -159 -118 0 -179 14 -242 56 l-41 27 29 21 c105 76 176
                  157 205 233 l18 48 109 -3 c158 -5 279 30 408 117 l30 21 34 -34 c32 -33 33
                  -35 21 -72z m455 25 c-37 -72 -123 -160 -195 -198 -70 -37 -194 -71 -262 -71
                  -26 0 -48 3 -48 6 0 3 8 18 19 32 28 40 67 121 81 168 l12 41 122 6 c119 5
                  187 20 262 60 16 8 30 14 32 12 2 -2 -9 -27 -23 -56z m-3889 -135 c12 -30 35
                  -74 50 -96 49 -70 160 -174 215 -202 60 -30 41 -34 -42 -10 -138 41 -246 133
                  -312 265 -20 42 -37 81 -37 87 0 9 86 22 99 15 2 -2 14 -28 27 -59z m1297 -4
                  c110 -39 267 -50 368 -27 l56 14 23 -45 c13 -24 50 -70 81 -102 l57 -57 -38
                  -47 c-107 -137 -297 -219 -465 -201 -135 14 -231 55 -320 137 -58 53 -139 164
                  -130 178 3 4 20 11 39 14 66 13 222 102 271 156 1 0 26 -9 58 -20z m2117 -196
                  c0 -7 -119 -61 -155 -69 -16 -4 -28 -4 -25 -2 60 57 95 77 136 77 24 0 44 -2
                  44 -6z m-1360 -90 c48 -14 100 -18 200 -18 131 1 177 9 272 49 34 14 32 -24
                  -5 -79 -115 -173 -309 -275 -523 -276 -105 0 -224 42 -312 111 l-22 17 55 32
                  c66 38 151 114 189 169 27 39 29 40 55 26 15 -7 56 -21 91 -31z m-1048 -76
                  c38 -37 88 -72 141 -98 74 -36 111 -47 230 -65 49 -8 47 -22 -7 -46 -63 -28
                  -173 -39 -275 -29 -109 12 -167 29 -223 68 -44 30 -178 166 -178 180 0 5 21
                  14 48 20 26 7 74 28 107 46 l60 34 19 -26 c11 -15 46 -53 78 -84z m1892 4
                  l150 4 -64 -58 c-34 -32 -90 -72 -124 -88 -101 -49 -256 -61 -379 -29 l-38 10
                  55 60 c31 33 67 79 81 103 l25 43 72 -25 c68 -22 84 -24 222 -20z m-1287 -148
                  c-10 -10 76 -72 153 -108 l70 -34 -35 -6 c-45 -9 -148 10 -199 36 -46 23 -116
                  76 -116 87 0 6 46 17 124 30 5 0 6 -2 3 -5z"/>
                  </g>
                </svg>
                  <span style={{fontWeight: 300, marginLeft: 10, marginRight: 50, fontSize: 22}}>Твой <span style={{fontWeight: 700}}>3D</span></span>
              </div>
              <div className='content-block'>
                <div className='col-block'>
                  <h6>КОМПАНИЯ</h6>
                  <ul>
                    <li><Link smooth="true" href='/about' onClick={() => window.scrollTo(0, 0)} className="nav-link">О нас</Link></li>
                    <li><Link smooth="true" href='/contacts' onClick={() => window.scrollTo(0, 0)} className="nav-link">Контакты</Link></li>
                    <li><Link smooth="true" href='/vacancy' onClick={() => window.scrollTo(0, 0)} className="nav-link">Вакансии</Link></li>
                  </ul>
                </div>
                <div className='col-block'>
                  <h6>ПОМОЩЬ</h6>
                  <ul>
                    <li><Link smooth="true" href='/personal' onClick={() => window.scrollTo(0, 0)} className="nav-link">Политика конфиденциальности</Link></li>
                    <li><Link smooth="true" href='/question' onClick={() => window.scrollTo(0, 0)} className="nav-link">Задать вопрос</Link></li>
                  </ul>
                </div>
                <div className='col-block'>
                  <h6>РЕСУРСЫ</h6>
                  <ul>
                    <li><Link smooth="true" href='/knowledgebase' onClick={() => window.scrollTo(0, 0)} className="nav-link">База знаний</Link></li>
                    <li><Link smooth="true" href='/blog' onClick={() => window.scrollTo(0, 0)} className="nav-link">Блог</Link></li>
                  </ul>
                </div>
                <div className='col-block'>
                  <h6>СВЯЗАТЬСЯ С НАМИ:</h6>
                  <ul>
                  <li><p>Почта:&nbsp;&nbsp;<a href='mailto:tvoy-3d@yandex.ru' className="nav-link">tvoy-3d@yandex.ru</a></p></li>
									<li><p>Телефон:&nbsp;&nbsp;<a href='tel:+79936307048' className="nav-link">+7 993-630-70-48</a></p></li>
                    <li><p>Адрес: Куровское, ул. Советская 105</p></li>
                    <li><p>ООО «ООО «ТВОЙ3Д»»</p></li>
                    <li><p>ОГРН 1245000031286</p></li>
                    <li><p>ИНН 5034068084</p></li>
                  </ul>
                </div>
              </div>

              <div className='content-block-mob'>
                  <button type="button" className='collapsed' data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    КОМПАНИЯ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                  <div className="collapse" id="collapseExample1">
                    <div className="card card-body">
                    <ul>
                      <li><Link smooth="true" href='/about' onClick={() => window.scrollTo(0, 0)} className="nav-link">О нас</Link></li>
                      <li><Link smooth="true" href='/contacts' onClick={() => window.scrollTo(0, 0)} className="nav-link">Контакты</Link></li>
                      <li><Link smooth="true" href='/vacancy' onClick={() => window.scrollTo(0, 0)} className="nav-link">Вакансии</Link></li>
                    </ul>
                    </div>
                  </div>
                  <button type="button" className='collapsed' data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    ПОМОЩЬ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                    <ul>
                    <li><Link smooth="true" href='/personal' onClick={() => window.scrollTo(0, 0)} className="nav-link">Политика конфиденциальности</Link></li>
                    <li><Link smooth="true" href='/question' onClick={() => window.scrollTo(0, 0)} className="nav-link">Задать вопрос</Link></li>
                    </ul>
                    </div>
                  </div>
                  <button type="button" className='collapsed' data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                    РЕСУРСЫ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body">
                    <ul>
                    <li><Link smooth="true" href='/knowledgebase' onClick={() => window.scrollTo(0, 0)} className="nav-link">База знаний</Link></li>
                    <li><Link smooth="true" href='/blog' onClick={() => window.scrollTo(0, 0)} className="nav-link">Блог</Link></li>
                    </ul>
                    </div>
                  </div>
                  <div className='col-block'>
                  <h6>СВЯЗАТЬСЯ С НАМИ:</h6>
                  <ul>
                    <li><p>Почта:&nbsp;&nbsp;<a href='mailto:tvoy-3d@yandex.ru' className="nav-link">tvoy-3d@yandex.ru</a></p></li>
										<li><p>Телефон:&nbsp;&nbsp;<a href='tel:+79936307048' className="nav-link">+7 993-630-70-48</a></p></li>
                    <li><p>Адрес: Куровское, ул. Советская 105</p></li>
                    <li><p>ООО «ООО «ТВОЙ3Д»»</p></li>
                    <li><p>ОГРН 1245000031286</p></li>
                    <li><p>ИНН 5034068084</p></li>
                  </ul>
                </div>
              </div>
            </footer>
        </>
    )
}
export default Footer