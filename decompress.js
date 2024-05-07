import { ungzip } from "pako";

// decode the base64 encoded data
const gzippedData = Buffer.from("H4sIAAAAAAAEAO2YUW/aMBDHv0rkl21SNtmhBMYbpK1WqYWssL1Me3CTA6waO7LNuqjqd++lCbSqmhFpYSrVeIrP5nz+5Z/LXW7JqZAw5isgAzI7mc5o8QsZ7YXEJ6PcQSS1FWoRaevI4MctGcONzIdpCikZzLm04JMoETig/oOvY+74GQ67QcgC1vXJueaqMARBLwxp4JMv6/RcKBhrMujTjk9iLZSzZKDWUvqkimWYZYYLy6V3CoChxFykMz3LM5w8KoejfOKWYEobLfwk25DibP44GGlj9A2Y4UqvFZ4i7NJPuH4KUj4ay91nBv1KnVxjvD45s8cgwT05Kgaz3W+sXVT898n0JdhMKyuuJMTcuHy7dhNCPInKDSffyy3v/JaRMkb7NUxnwknwPnrnoFIw76xXGs6UXRuukrYxsz7rN+DcOVTO7GgH58mNeoI51lIkufdeZ05oxeWHlnF3Ok1UHR4sbbaDdpWovNhoB0nBGIXuHJg9ZJCg+5aFTcMdqDFwbvI9cO3QJho+XLDBDrDDK+sMT5ynTZU1psBNsmxbvsHbxrwrMZ+oVBsLK1BuDyJuVF0cKtyA1uXhS0i0SYsMjMdAyMeAO7ZcUTRJu0cHS7bXkOyFNm7BF62XxU10e7h066ri53Qf6P0XbvMerljwcg+XroSqqJY9xzOsrClWZ9YvUm1ULrA/cmWvlmvtaywykArnXUKGiWAPLzDW+/v++PViZbQGKzYOCVhbZYJ2pRrQty3Vz3UVF/+NJaz5JRJoH2ojmf4jpD9xsviIstwcHKzzSgtmv+piYhbew3yJc+q4W9tH9dkM+9ZqbjKfIzOzeeIltgFB4dP3vg5JzS36ZsEUBsKCMAz7jJSmyseFSJYcZIQqv8a+mBRcRtyCxJtYEr67B4GJTOkOFAAA", "base64");

console.log('gzipeddata', gzippedData);
const ungzippedData = ungzip(gzippedData);
const data = new TextDecoder().decode(ungzippedData);

console.log('ungzipped data', JSON.parse(data, null, 2));