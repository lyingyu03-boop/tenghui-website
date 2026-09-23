import os
import fitz

target_pdf = None
search_base = r"c:\SYNC\TENG"
for root, dirs, files in os.walk(search_base):
    for f in files:
        if f.endswith('.pdf') and '小磨坊' in f:
            target_pdf = os.path.join(root, f)
            print(f"Found target PDF: {target_pdf}")
            break
    if target_pdf:
        break

if target_pdf:
    doc = fitz.open(target_pdf)
    out_dir = r"c:\SYNC\TENG\騰煇_素材\ATeng\tenghui-website\img\projects\xiaomofang"
    os.makedirs(out_dir, exist_ok=True)
    print(f"Extracting {len(doc)} pages to {out_dir}...")
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        page_img = os.path.join(out_dir, f"page_{i+1:02d}.jpg")
        pix.save(page_img)
        
        images = page.get_images()
        for j, img in enumerate(images):
            try:
                base_img = doc.extract_image(img[0])
                ext = base_img["ext"]
                sub_img = os.path.join(out_dir, f"p{i+1:02d}_img{j+1}.{ext}")
                with open(sub_img, "wb") as f_out:
                    f_out.write(base_img["image"])
            except Exception as e:
                pass
    print("Extraction successfully finished!")
else:
    print("Could not locate PDF file.")
