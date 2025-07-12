import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'personalclicks.txt')
    
    let currentCount = 0
    
    // Read current count from file
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        currentCount = parseInt(fileContent.trim()) || 0
      }
    } catch (error) {
      console.log('File does not exist or error reading file, starting from 0')
    }
    
    // Increment count
    const newCount = currentCount + 1
    
    // Write new count to file
    fs.writeFileSync(filePath, newCount.toString())
    
    return NextResponse.json({ 
      success: true, 
      count: newCount,
      message: 'Personal tab click recorded' 
    })
  } catch (error) {
    console.error('Error tracking personal tab click:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to track click' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'personalclicks.txt')
    
    let currentCount = 0
    
    // Read current count from file
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        currentCount = parseInt(fileContent.trim()) || 0
      }
    } catch (error) {
      console.log('File does not exist, returning 0')
    }
    
    return NextResponse.json({ 
      success: true, 
      count: currentCount 
    })
  } catch (error) {
    console.error('Error getting personal tab clicks:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to get click count' 
    }, { status: 500 })
  }
} 