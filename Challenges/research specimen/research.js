// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      mutate() {
        const randBase = Math.floor(Math.random() * this.dna.length)
        const dnaBases = ['A', 'T', 'C', 'G']
        
        let newBase 
        do {
          newBase = dnaBases[Math.floor(Math.random() * dnaBases.length)]
        } while (newBase === this.dna[randBase])
  
        this.dna[randBase] = newBase
        return this.dna
      },
  
      compareDNA(pAequor2) {
        let identicalBases = 0
  
        for(let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === pAequor2.dna[i]) {
            identicalBases ++
          }
        }
  
        const percentages = ((identicalBases / this.dna.length) * 100).toFixed(2)
  
        console.log(`specimen ${this.specimenNum} and ${pAequor2.specimenNum} have ${percentages}% DNA in common.`)
      },
  
      willLikelySurvive() {
        const survive = this.dna.filter(base => base === 'C' || base === 'G').length
        return (survive / this.dna.length) >= 0.6
      }
    }
  };
  
  const survivingOrganism = []
  
      let specimenNum = 1
  
      while(survivingOrganism.length < 30) {
        const newOrganism = pAequorFactory(specimenNum, mockUpStrand())
  
        if(newOrganism.willLikelySurvive()) {
          survivingOrganism.push(newOrganism)
        }
        specimenNum++
      };
  
  const pAequor = pAequorFactory(1, mockUpStrand())
  const pAequor2 = pAequorFactory(2, mockUpStrand())
  
  console.log('Before mutation: ', pAequor.dna.join(''))
  
  pAequor.mutate()
  
  console.log('After mutation: ', pAequor.dna.join(''))
  
  pAequor.compareDNA(pAequor2);
  
  console.log('Will the alien survive? ', pAequor.willLikelySurvive())
  
  console.log('Number of surviving organisms:', survivingOrganism.length)
  console.log('Example DNA of first organism:', survivingOrganism[0].dna.join(''))
  
  
  
  
  
  