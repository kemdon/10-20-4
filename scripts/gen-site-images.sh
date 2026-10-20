set -e
cd "$(dirname "$0")/.."
gen() { python scripts/image.py "$2" "public/assets/images/$1.png" -s "$3" -q medium && echo "OK $1"; }
gen hero "Warm cinematic photo of Chinese adult students in a modern continuing-education classroom in Ningbo, evening class, adults in business casual taking notes, teacher at whiteboard, soft golden light, professional education brand photography" 1536x1024
gen highlight-tutoring "Photo of a tutoring classroom at an adult education center in China, small group of adult learners with workbooks, instructor guiding them, bright modern interior" 1024x1024
gen highlight-career "Photo of a one-on-one career planning consultation, Chinese consultant and adult client talking across a desk with laptop and documents, friendly professional office" 1024x1024
gen showcase-network "Photo of a modern education service center storefront interior in a Chinese city, reception area with staff helping students, clean bright design" 1024x1024
gen cat-career "Photo of a job interview coaching session, Chinese adult professional practicing interview with mentor, resume documents on table, bright office" 1024x1024
gen cat-skills "Photo of adult vocational skills training in China, adults learning computer office software in a training lab, instructor pointing at screen" 1024x1024
gen cat-exam "Photo of adult exam preparation, stack of textbooks and notes with pencil and glasses on desk, warm study lamp light, adult studying at desk" 1024x1024
gen cat-interest "Photo of traditional Chinese hobby class, tea ceremony and calligraphy brushes arrangement, elegant cultural classroom, warm tones" 1024x1024
gen cat-degree "Photo of university graduation ceremony in China, adult graduates in gowns holding diplomas, celebrating, campus building background, bright daylight" 1024x1024
gen product-zikao "Photo of an adult self-studying with textbooks and highlighted notes at a library desk, focused, soft window light" 1024x1024
gen product-online "Photo of an adult attending an online class at home, laptop with video lesson on screen, notebook in hand, cozy study corner" 1024x1024
gen product-campus "Photo of a Chinese adult education school campus building with students walking, green trees, clear sky" 1024x1024
