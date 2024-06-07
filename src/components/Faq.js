import {Accordion} from "react-bootstrap"

const Faq = () => {
    return (
      
      <div>
        <h1 className="text-white text-center mb-4">FAQs</h1>  

      <Accordion id="faq">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apa itu Transbali?</Accordion.Header>
        <Accordion.Body>
          Sistem bus Transbali, yang lebih dikenal dengan nama Trans Metro Dewata, merupakan layanan transportasi umum komprehensif di Bali. ini beroperasi di berbagai koridor, memfasilitasi perjalanan melintasi lokasi-lokasi utama di pulau itu.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion className="pt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Ada berapa koridor yang dilayani oleh Transbali?</Accordion.Header>
        <Accordion.Body>
         
        <p> Koridor 1 : Central Parkir Kuta to Terminal Pasar Pesiapan.</p>
          <p>Koridor 2 : Terminal Ubung to Ngurah Rai International Airpot.</p>
          <p>Koridor 3 : Terminal Ubung to Pantai Matahari Terbit. </p>
          <p>Koridor 4 : GOR Ngurah Rai to Monkey Forest Ubud.</p>
          <p>Koridor 5 : Central Parkir Kuta to Politeknik Negri Bali</p> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion className="pt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Rutenya bisa dilihat di mana?</Accordion.Header>
        <Accordion.Body>
          Rute lengkap Transbali dapat dilihat pada website resmi Transbali www.transbali.co.id atau pada website Voyage
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion className="pt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Bagaimana cara menggunakan Voyage</Accordion.Header>
        <Accordion.Body>
         Dengan cara klik search pada homepage untuk mencari bus pada tujuan anda. Kemudian, pilih bus yang tersedia.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion className="pt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Berapa tarif Transbali?</Accordion.Header>
        <Accordion.Body>
          Saat ini, tarif untuk penumpang umum adalah Rp. 4.400 per perjalanan. Penumpang khusus seperti pelajar, mahasiswa strata 1, dan lansia (lanjut usia) dikenakan tarif Rp 2.000 per perjalanan
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
    
    )
}

export default Faq