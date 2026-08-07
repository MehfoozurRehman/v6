import PDFDocument from "pdfkit";
import { cvContent } from "./cv-content.mjs";
import fs from "node:fs";
import path from "node:path";

const { profile, experience, education, stack, profileHighlights, services } =
  cvContent;

const outPath = path.join(process.cwd(), "public", "cv.pdf");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margin: 0,
  info: {
    Title: `${profile.name} CV`,
    Author: profile.name,
  },
});

doc.pipe(fs.createWriteStream(outPath));

const W = doc.page.width;
const H = doc.page.height;
const M = 42;
const rightX = 392;
const mainW = rightX - M - 30;
const sideW = W - rightX - M;

const color = {
  ink: "#181b20",
  text: "#303640",
  muted: "#66707d",
  rule: "#d9dee5",
  soft: "#f3f5f7",
  accent: "#d95836",
  accentSoft: "#fff1eb",
  dark: "#111827",
};

function text(value, x, y, options = {}) {
  const {
    size = 9.4,
    font = "Helvetica",
    fill = color.text,
    width,
    lineGap = 1.5,
    align,
  } = options;
  doc
    .fillColor(fill)
    .font(font)
    .fontSize(size)
    .text(value, x, y, { width, lineGap, align });
}

function height(value, width, options = {}) {
  const { size = 9.4, font = "Helvetica", lineGap = 1.5 } = options;
  return doc
    .font(font)
    .fontSize(size)
    .heightOfString(value, { width, lineGap });
}

function section(label, x, y, width) {
  text(label.toUpperCase(), x, y, {
    size: 8.2,
    font: "Helvetica-Bold",
    fill: color.accent,
    width,
  });
  doc
    .moveTo(x, y + 14)
    .lineTo(x + width, y + 14)
    .lineWidth(0.8)
    .strokeColor(color.rule)
    .stroke();
  return y + 25;
}

function pill(label, x, y, maxW = sideW) {
  doc.font("Helvetica-Bold").fontSize(7.6);
  const w = Math.min(doc.widthOfString(label) + 14, maxW);
  doc.roundedRect(x, y, w, 17, 8.5).fill(color.soft);
  text(label, x + 7, y + 4.8, {
    size: 7.6,
    font: "Helvetica-Bold",
    fill: color.dark,
    width: w - 14,
    align: "center",
  });
  return w;
}

function wrappedPills(items, x, y, width) {
  let cx = x;
  let cy = y;
  items.forEach((item) => {
    doc.font("Helvetica-Bold").fontSize(7.6);
    const w = Math.min(doc.widthOfString(item) + 14, width);
    if (cx + w > x + width) {
      cx = x;
      cy += 22;
    }
    pill(item, cx, cy, width);
    cx += w + 6;
  });
  return cy + 22;
}

// Header
doc.rect(0, 0, W, 128).fill(color.dark);
doc.rect(0, 128, W, 4).fill(color.accent);
text(profile.name, M, 34, {
  size: 26,
  font: "Helvetica-Bold",
  fill: "white",
  width: 350,
});
text(profile.role, M, 71, {
  size: 11,
  font: "Helvetica-Bold",
  fill: "#dbe3ee",
  width: 300,
});
text(profile.headline, M, 92, {
  size: 8.8,
  fill: "#c7d0dc",
  width: 355,
});

doc.roundedRect(rightX, 32, sideW, 70, 10).fill("#ffffff");
text(profile.email, rightX + 13, 46, {
  size: 8.2,
  fill: color.ink,
  width: sideW - 26,
});
text(profile.phone, rightX + 13, 62, {
  size: 8.2,
  fill: color.ink,
  width: sideW - 26,
});
text(profile.location, rightX + 13, 79, {
  size: 8.1,
  fill: color.muted,
  width: sideW - 26,
});

let y = 154;

// Profile
y = section("Profile", M, y, mainW);
text(profile.about, M, y, {
  size: 9.6,
  fill: color.text,
  width: mainW,
  lineGap: 2,
});
y += height(profile.about, mainW, { size: 9.6, lineGap: 2 }) + 18;

// Experience
y = section("Experience", M, y, mainW);
experience.forEach(([role, company, period, location, summary]) => {
  text(role, M, y, {
    size: 11,
    font: "Helvetica-Bold",
    fill: color.ink,
    width: mainW,
  });
  text(`${company} | ${period}`, M, y + 15, {
    size: 8.5,
    font: "Helvetica-Bold",
    fill: color.accent,
    width: mainW,
  });
  text(location, M, y + 28, { size: 8.1, fill: color.muted, width: mainW });
  text(summary, M, y + 43, {
    size: 8.9,
    fill: color.text,
    width: mainW,
    lineGap: 1.8,
  });
  y += 50 + height(summary, mainW, { size: 8.9, lineGap: 1.8 });
});

// Sidebar
let sy = 154;
sy = section("Strengths", rightX, sy, sideW);
profileHighlights.forEach(([title, body]) => {
  text(title, rightX, sy, {
    size: 9.1,
    font: "Helvetica-Bold",
    fill: color.ink,
    width: sideW,
  });
  text(body, rightX, sy + 13, {
    size: 8,
    fill: color.muted,
    width: sideW,
    lineGap: 1.3,
  });
  sy += 18 + height(body, sideW, { size: 8, lineGap: 1.3 }) + 8;
});

sy += 8;
sy = section("Services", rightX, sy, sideW);
services.forEach(([title]) => {
  doc.circle(rightX + 3, sy + 5, 2.1).fill(color.accent);
  text(title, rightX + 12, sy, {
    size: 8.7,
    font: "Helvetica-Bold",
    fill: color.ink,
    width: sideW - 12,
  });
  sy += 18;
});

sy += 8;
sy = section("Education", rightX, sy, sideW);
education.forEach(([school, degree, period]) => {
  text(school, rightX, sy, {
    size: 9,
    font: "Helvetica-Bold",
    fill: color.ink,
    width: sideW,
  });
  text(degree, rightX, sy + 14, { size: 8.2, fill: color.text, width: sideW });
  text(period, rightX, sy + 27, { size: 8, fill: color.accent, width: sideW });
  sy += 48;
});

sy += 8;
sy = section("Stack", rightX, sy, sideW);
wrappedPills(stack, rightX, sy, sideW);

// Footer
doc.rect(M, H - 54, W - M * 2, 1).fill(color.rule);
text("Portfolio CV", M, H - 38, { size: 8, fill: color.muted, width: 120 });
text(profile.name, W - M - 140, H - 38, {
  size: 8,
  fill: color.muted,
  width: 140,
  align: "right",
});

doc.end();
doc.on("finish", () => process.stdout.write(`Wrote ${outPath}\n`));
